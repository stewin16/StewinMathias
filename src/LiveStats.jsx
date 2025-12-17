import React, { useState, useEffect, useRef } from 'react';
import { Activity, Users } from 'lucide-react';
import { db } from './firebaseConfig';
import { ref, onValue, set, onDisconnect, runTransaction, push, serverTimestamp } from 'firebase/database';

const LiveStats = () => {
  const [live, setLive] = useState(0);
  const [visits, setVisits] = useState(0);
  const initialized = useRef(false);

  useEffect(() => {
    // --- 1. Total Visits Counter ---
    const visitsRef = ref(db, 'stats/visits');
    
    // Increment only once per session to avoid inflating numbers on refresh
    const sessionKey = 'portfolio_visit_counted';
    const hasCounted = sessionStorage.getItem(sessionKey);

    // For testing: We commented out the check so it increments on every refresh.
    // Uncomment the 'if' statement below when you are ready for production.
    // if (!hasCounted) {
    if (!initialized.current) {
      initialized.current = true;
      runTransaction(visitsRef, (current) => {
        return (current || 0) + 1;
      }).then(() => {
        sessionStorage.setItem(sessionKey, 'true');
      }).catch((err) => console.error("Firebase transaction failed:", err));
    }
    // }

    // Listen for real-time updates to total visits
    const unsubVisits = onValue(visitsRef, (snapshot) => {
      setVisits(snapshot.val() || 0);
    });

    // --- 2. Live Users (Presence System) ---
    const connectedRef = ref(db, '.info/connected');
    const onlineListRef = ref(db, 'stats/online');
    
    // Create a unique reference for this user
    const myUserRef = push(onlineListRef);

    const unsubConnected = onValue(connectedRef, (snap) => {
      if (snap.val() === true) {
        // We are connected. Add ourselves to the online list.
        set(myUserRef, {
          timestamp: serverTimestamp(),
          userAgent: navigator.userAgent
        }).catch((err) => console.error("Error adding user to live list:", err));

        // If we lose connection (close tab), remove this ref from server
        onDisconnect(myUserRef).remove();
      }
    });

    // Listen for count of online users
    const unsubOnline = onValue(onlineListRef, (snapshot) => {
      setLive(snapshot.size);
    });

    return () => {
      unsubVisits();
      unsubConnected();
      unsubOnline();
      // Clean up on component unmount
      set(myUserRef, null);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      background: 'rgba(5, 5, 5, 0.8)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.1)',
      padding: '1rem 1.5rem',
      borderRadius: '16px',
      zIndex: 50,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.85rem',
      color: '#888'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#fff', fontWeight: 600 }}>
        <div style={{ position: 'relative', display: 'flex' }}>
          <div style={{ width: 8, height: 8, background: '#22c55e', borderRadius: '50%' }}></div>
          <div style={{ position: 'absolute', width: 8, height: 8, background: '#22c55e', borderRadius: '50%', animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite', opacity: 0.7 }}></div>
        </div>
        <span>{live} Live Eyes</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <Users size={14} />
        <span>{visits.toLocaleString()} Visits</span>
      </div>
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default LiveStats;