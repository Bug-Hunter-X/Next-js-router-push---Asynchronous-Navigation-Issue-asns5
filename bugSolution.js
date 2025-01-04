```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = async () => {
    await router.push('/some-page');
    // Code here will execute AFTER navigation
    console.log('Navigated');
  };

  return (
    <button onClick={handleClick}>Go to some-page</button>
  );
}
export default MyComponent;
```