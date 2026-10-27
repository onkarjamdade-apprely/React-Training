export const InputBox = ({text, setText, onSubmit}) => {

  return (
    <div className="mx-auto mt-8 w-full max-w-md rounded-xl bg-white p-6 shadow-md">

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none"
      />
    </div>
  );
};