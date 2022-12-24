import Link from 'next/link';
import { Link as A } from '@chakra-ui/react';
import Image from 'next/image';

const LogoMarques = () => {
  return (
    <Link href="/" passHref>
      <A>
        <Image src="/logo.png" alt="Logo" width={150} height={68} />
      </A>
    </Link>
  );
};

export default LogoMarques;