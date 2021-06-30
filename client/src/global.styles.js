import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Open Sans Condensed';
		padding: 20px 40px;

		@media screen and (max-width: 800px) {
			padding: 10px;
		}

		background-color: var(--background-color);
	}

	body,
	input,
	textarea {
		font-family: 'Open Sans Condensed';
	}

	a {
		text-decoration: none;
		color: var(--primary-color);

		&:hover {
	    color: var(--secondary-color);
	    text-decoration: underline;

	    @media screen and (max-width: 800px) {
	      color: unset;
	      text-decoration: unset;
	    }
	  }
	}

	* {
		box-sizing: border-box;
	}

	// GLOBAL VARIABLES
	:root {
	  --font-family: sans-serif;
	  --background-color: white;
	  --primary-color: #9B186A;
	  --secondary-color: black;
	  --white: white;
	  --black: black;
	  --border-radius: 0px;
	}
`;
