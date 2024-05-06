import './App.css'
import Header from '@/components/Header/Header'
import Contact from './components/Contact/Contact'
import Links from './components/Links/Links'

function App() {
	return (
		<div className='flex flex-col space-y-5'>
			<Header />
			<Contact />
			<Links />
		</div>
	)
}

export default App
