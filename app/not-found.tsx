// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
