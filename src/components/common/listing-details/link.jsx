

function link() {
  return (
    <div>
      {/* Nút sẽ chuyển đến đường dẫn được chỉ định khi được nhấp */}
      <Link to="/listing-details-v3">
        <button>Chuyển đến trang khác</button>
      </Link>
    </div>
  );
}

export default link;