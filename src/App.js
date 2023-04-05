import './App.css'
import MyButton from './components/MyButton/MyButton'

function App() {
  console.log('render')

  return <MyButton />
}

export default App

// const [prev, changePrev] = useState(1);
/*  */ // useEffect(() => {
//   function onScroll() {
//     console.log(`prev: ${prev}, current: ${prev + 1}`);
//     changePrev(prev + 1);
//     document.removeEventListener("scroll", onScroll);
//   }
//
//   document.addEventListener("scroll", onScroll);
// }, [prev, changePrev]);

// const ref = useRef();
// const refDiv = {current: undefined};
//
// console.log(ref.current);
/* const prev = useRef(1)

useEffect(() => {
  document.addEventListener('scroll', () => {
    console.log(`prev: ${prev.current}, current: ${prev.current + 1}`)
    prev.current = prev.current + 1
  })
})
 */
