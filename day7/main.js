const isInteger = (a, b) => {
    // Kiểm tra xem cả a và b đều là số và có giá trị nguyên
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
      return "a hoặc b đang ko phải số nguyên";
    } 
  };
  console.log(isInteger(-2, 10));
  // Sử dụng hàm để kiểm tra
  const a = 5;
  const b = 10.5;
  
  if (isInteger(a, b)) {
    console.log('${a} và ${b} là số nguyên');}