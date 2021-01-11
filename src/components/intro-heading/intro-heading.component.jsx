import React from 'react';

import './intro-heading.styles.scss';

const IntroHeading = () => {
	return (
		<div className="intro-heading">
			<img
				src="https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.0-9/84495964_10213392049590628_6432069853426745344_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=VXRV8f7BdCEAX8LvWX9&_nc_ht=scontent.fsdv3-1.fna&oh=e343ca66353d4652985f5ef79be1853b&oe=60201833"
				alt="profile"
			/>
			<div className="normal-text">Hello.</div>
			<span>I'm Daniel Gaishuber, a </span>
			<span className="bold-purple">programmer</span>
		</div>
	);
};

export default IntroHeading;
