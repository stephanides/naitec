import { LogoDark } from '@/src/shared/design';
import { Box, Flex } from '@chakra-ui/react';
import { rem } from 'polished';
import { useEffect, useState, useRef } from 'react';
import Confetti from 'react-confetti';

const EmailPicker = ({ emails, forcedWinner }) => {
  const [currentEmail, setCurrentEmail] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const startPicking = () => {
    if (!emails || emails.length === 0) return;

    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * emails.length);
      setCurrentEmail(emails[randomIndex]);
    }, 100);

    timeoutRef.current = setTimeout(() => {
      clearInterval(intervalRef.current);
      if (forcedWinner && emails.includes(forcedWinner)) {
        setCurrentEmail(forcedWinner); // Force the winner
        setShowConfetti(true);
      }
      setIsRunning(false);
      setShowConfetti(true);
    }, 5000);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          marginTop: '40px',
          paddingBottom: '100px',
        }}
      >
        <Flex justifyContent="center" my={rem(40)}>
          <Box width={rem(240)}>
            <LogoDark />
          </Box>
        </Flex>
        <div
          style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}
        >
          {currentEmail
            ? isRunning
              ? `${currentEmail}`
              : `${currentEmail}`
            : 'Stlačte tlačidlo na žrebovanie'}
        </div>

        <button
          onClick={startPicking}
          disabled={isRunning}
          style={{
            fontSize: '16px',
            padding: '10px 20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        >
          {isRunning ? 'Žrebujem...' : 'Žrebovať víťaza'}
        </button>
        {/* <h2
        style={{
          paddingTop: '40px',
          fontSize: '20px',
          fontWeight: 'bold',
          paddingBottom: '20px',
        }}
      >
        List of contestants
      </h2>

      {emails.slice(0, 100).map((email) => (
        <p key={email}>{email}</p>
      ))} */}
        {showConfetti && <Confetti width={400} height={800} />}
      </div>
    </div>
  );
};

export default EmailPicker;
