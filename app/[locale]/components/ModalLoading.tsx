
export function ModalLoading() {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-20">
      <div className="flex flex-col justify-between w-96">
        <div className="flex items-center justify-center">
          <div className="loader"></div>
        </div>
      </div>
    </div>
  );
}