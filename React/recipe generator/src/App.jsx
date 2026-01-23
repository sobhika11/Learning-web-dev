import Header from './components/Header.jsx'
import './App.css'
import Form from './Form.jsx'
export default function App() {
  return (
    <>
      <Header />
      <Form/>
    </>
  )
}
// 1.visual indicatin - X
// 2.sibling to sibling cant pass props so main parent ->App ,la we content rendered