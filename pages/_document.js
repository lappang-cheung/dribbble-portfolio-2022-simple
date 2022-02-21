import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body className="md:overflow-hidden">
				<Main />
				<NextScript />
				</body>
			</Html>
		)
	}
}