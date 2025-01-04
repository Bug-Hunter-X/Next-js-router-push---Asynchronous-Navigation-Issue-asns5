```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/some-page');
    // Do something else after navigation
    console.log('Navigated');
  };

  return (
    <button onClick={handleClick}>Go to some-page</button>
  );
}
export default MyComponent;
```