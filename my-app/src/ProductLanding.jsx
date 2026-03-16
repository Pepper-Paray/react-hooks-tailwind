
import { useRef, useEffect } from "react";

function ProductLanding() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const productRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleCapture = (e) => {
    e.preventDefault();

    const fullName = nameRef.current.value;
    const email = emailRef.current.value;
    const product = productRef.current.value;

    alert(
      `Customer Info:\nName: ${fullName}\nEmail: ${email}\nProduct: ${product}`
    );
  };

  return (
    <div>
      <h1>Product Interest Form</h1>

      <form onSubmit={handleCapture}>
        <input ref={nameRef} type="text" placeholder="Full Name" />
        <br />

        <input ref={emailRef} type="email" placeholder="Email" />
        <br />

        <select ref={productRef}>
          <option>Standard</option>
          <option>Pro</option>
          <option>Ultra</option>
        </select>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProductLanding;

