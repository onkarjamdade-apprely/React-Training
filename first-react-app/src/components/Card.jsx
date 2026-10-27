import img from "../assets/react.svg"

export default function Card({ username, onButtonClick }) {
	return (
		<article className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6 text-center shadow-md mt-4 mb-4 m-auto">
			<img className="mx-auto mb-4 h-20 w-20 rounded-full object-cover" src={img} alt={username} />
			<h2 className="mb-4 text-xl font-semibold text-gray-900">{username}</h2>
			<button
				type="button"
				// onClick={onButtonClick}
				className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
			>
				{onButtonClick}
			</button>
		</article>
	);
}
