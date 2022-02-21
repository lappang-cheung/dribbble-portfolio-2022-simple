import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en" className="dark">
				<Head />
				<body className="md:overflow-hidden dark:bg-black dark:text-blue-100">
				<Main />
				<NextScript />
				</body>
			</Html>
		)
	}
}