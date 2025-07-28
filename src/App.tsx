import './App.css'

const App = () => {
	const profileImg = '/images/jack_soccer.jpg'
	const links = [
		{
			href: 'https://recruit-match.ncsasports.org/clientrms/athletes/11904466',
			label: 'NCSA Profile',
		},
		{
			href: 'https://vimeo.com/1105218858',
			label: 'Assist On Goal',
		},
		{
			href: 'https://vimeo.com/1105215223',
			label: 'Highlight Reel',
		},
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
			<img src={profileImg} alt='Profile' className='profile-img' />
			<div className='profile-info'>
				<div className='profile-name'>Jack McBride</div>
				<div className='profile-school'>Newport Harbor High School</div>
				<div className='profile-gpa'>Class of 2026 - 3.8 GPA</div>
			</div>
			<div className='links-col'>
				{links.map((link, idx) => (
					<a
						key={idx}
						href={link.href}
						className='profile-link'
						target='_blank'
						rel='noopener noreferrer'
					>
						{link.label}
					</a>
				))}
			</div>
		</div>
	)
}

export default App
