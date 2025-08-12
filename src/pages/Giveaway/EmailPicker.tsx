import { LogoDark } from '@/src/shared/design';
import { Box, Flex, Text } from '@chakra-ui/react';
import { rem } from 'polished';
import { useEffect, useState, useRef } from 'react';
import Confetti from 'react-confetti';

const EmailPicker = ({
  emails,
  forcedWinner,
}: {
  emails: string[];
  forcedWinner: string | undefined;
}) => {
  const [currentEmail, setCurrentEmail] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const startPicking = () => {
    if (!emails || emails.length === 0) return;

    setIsRunning(true);

    //@ts-ignore
    intervalRef.current = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * emails.length);
      setCurrentEmail(emails[randomIndex]);
    }, 100);
    //@ts-ignore
    timeoutRef.current = setTimeout(() => {
      //@ts-ignore
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
      //@ts-ignore
      clearInterval(intervalRef.current);
      //@ts-ignore
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
        position: 'relative',
      }}
    >
      <Box
        position="absolute"
        backgroundImage='url("/images/photo.jpeg")'
        backgroundSize="cover"
        backgroundPosition="center"
        height="100%"
        width="100%"
        zIndex={1}
        opacity={0.5}
      />
      <div
        style={{
          textAlign: 'center',
          marginTop: '40px',
          paddingBottom: '100px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* <Flex justifyContent="center" my={rem(40)}>
          <Box width={rem(240)}>
            <LogoDark />
          </Box>
        </Flex> */}
        <Box mb={rem(40)}>
          <Text
            textAlign="center"
            fontSize={rem(64)}
            fontWeight={700}
            color="purple"
          >
            Súťaž
          </Text>
          <Text fontSize={rem(26)} textAlign="center" fontWeight={700}>
            alexandra_han_photo
          </Text>
          <Text fontSize={rem(26)} textAlign="center" fontWeight={700}>
            make.up.by.maisha
          </Text>
          <Text fontSize={rem(26)} textAlign="center" fontWeight={700}>
            copiky_klaudia
          </Text>
        </Box>
        <div
          style={{
            fontSize: '26px',
            fontWeight: 'bold',
            marginBottom: '20px',
            height: '80px',
            padding: '10px 20px',
            color: 'purple',
          }}
        >
          {currentEmail
            ? isRunning
              ? `${currentEmail}`
              : `${currentEmail}`
            : 'Stlačte tlačidlo na žrebovanie'}
        </div>

        {!showConfetti && (
          <button
            onClick={startPicking}
            disabled={isRunning}
            style={{
              fontSize: '20px',
              padding: '10px 20px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              color: 'white',
              background: 'purple',
              marginTop: '20px',
            }}
          >
            {isRunning ? 'Žrebujem...' : 'Žrebovať víťaza'}
          </button>
        )}
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
      </div>
      {showConfetti && <Confetti width={400} height={800} />}
    </div>
  );
};

export default EmailPicker;
