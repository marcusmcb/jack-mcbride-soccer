import './App.css'
import { useState } from 'react'
import { events } from './data/events'

const App = () => {
	const [page, setPage] = useState<'main' | 'events'>('main')
	const profileImg = '/images/jack_soccer.jpg'
	const links = [
		{
			href: '#events',
			label: 'Upcoming Events',
			onClick: (e: React.MouseEvent) => {
				e.preventDefault()
				setPage('events')
			},
		},
		{
			href: 'https://recruit-match.ncsasports.org/clientrms/athletes/11904466',
			label: 'NCSA Profile',
		},
		{
			href: 'https://vimeo.com/1105215223',
			label: 'Highlight Reel',
		},
		// {
		// 	href: 'https://vimeo.com/1105218858',
		// 	label: 'Assist On Goal',
		// },

		{ href: 'https://www.nhhsboyssoccer.com/', label: 'NHHS Sailors' },
		{
			href: 'https://www.pateadores.org/newport-beach/costa-mesa#NBCMTEAMS',
			label: 'Pateadores Newport Beach',
		},
		{
			href: 'mailto:jackmcb08@gmail.com',
			label: 'Get In Touch',
		},
	]

	return (
		<div className='container'>
			{page === 'main' && (
				<>
					<img src={profileImg} alt='Profile' className='profile-img' />
					<div className='profile-info'>
						<h1 className='profile-name'>Jack McBride</h1>
						<div className='profile-school'>Newport Harbor High School</div>
						<div className='profile-gpa'>Class of 2026 - 3.8 GPA</div>
					</div>
					<div className='links-col'>
						{links.map((link, idx) => (
							<a
								key={idx}
								href={link.href}
								className='profile-link'
								target={link.href.startsWith('mailto:') ? undefined : '_blank'}
								rel='noopener noreferrer'
								onClick={link.onClick}
							>
								{link.label}
							</a>
						))}
					</div>
				</>
			)}
			{page === 'events' && (
				<div className='events-page'>
					<h2 className='events-title'>Upcoming Soccer Events</h2>
					<div className='events-list'>
						{events.map((event, idx) => (
							<div className='event-card' key={idx}>
								<div className='event-name'>{event.name}</div>
								<div className='event-details'>
									<span>{event.date}</span> | <span>{event.time}</span>
								</div>
								<div className='event-location'>
									<span>{event.location}</span>
									{event.map && (
										<a
											href={event.map}
											className='event-map-link'
											target='_blank'
											rel='noopener noreferrer'
										>
											&nbsp;View Map
										</a>
									)}
								</div>
							</div>
						))}
					</div>
					<button
						className='profile-link'
						style={{ marginTop: '2rem' }}
						onClick={() => setPage('main')}
					>
						Back to Profile
					</button>
				</div>
			)}
		</div>
	)
}

export default App
