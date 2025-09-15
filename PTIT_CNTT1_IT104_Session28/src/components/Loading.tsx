const Loading = () => {
    return (
      <div className="flex items-center justify-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        <span className="ml-2 text-blue-500 font-medium">Đang tải...</span>
      </div>
    );
  };
  
  export default Loading;