function TextView({ inputval }) {
  return (
    <div className="mx-auto mt-8 w-full max-w-md rounded-xl bg-white p-6 shadow-md">

      <p className="break-words text-xl text-gray-900 f-20">
        {inputval || "Your text will appear here..."}
      </p>

    </div>
  );
}

export default TextView;