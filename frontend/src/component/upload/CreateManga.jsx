import { useState } from "react";
import { uploadManga } from "../../../apiCall";

const CreateManga = () => {
  const [values, setValues] = useState({
    websiteName: "",
    mangaName: "",
    mangaCover: "",
    mangaLink: "",
    mangaClass: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await uploadManga(values);
    console.log(result);
    alert(result.message);
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100 vw-100'>
      <div className='bg-white p-3 rounded '>
        <h2>sign up</h2>
        <form className='container' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='websiteName'>
              {" "}
              <strong>websiteName</strong>
            </label>
            <input
              required
              type='text'
              placeholder='Enter websiteName'
              name='websiteName'
              className='form-control rounded-0'
              onChange={(e) =>
                setValues({ ...values, websiteName: e.target.value })
              }
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='mangaName'>
              {" "}
              <strong>mangaName</strong>
            </label>
            <input
              required
              type='text'
              placeholder='Enter mangaName'
              name='mangaName'
              className='form-control rounded-0'
              onChange={(e) =>
                setValues({ ...values, mangaName: e.target.value })
              }
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='mangaCover'>
              {" "}
              <strong>mangaCover</strong>
            </label>
            <input
              required
              type='text'
              placeholder='Enter mangaCover'
              name='mangaCover'
              className='form-control rounded-0'
              onChange={(e) =>
                setValues({ ...values, mangaCover: e.target.value })
              }
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='mangaLink'>
              {" "}
              <strong>mangaLink</strong>
            </label>
            <input
              required
              type='text'
              placeholder='Enter mangaLink'
              name='mangaLink'
              className='form-control rounded-0'
              onChange={(e) =>
                setValues({ ...values, mangaLink: e.target.value })
              }
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='mangaClass'>
              {" "}
              <strong>mangaClass</strong>
            </label>
            <input
              required
              type='text'
              placeholder='Enter mangaClass'
              name='mangaClass'
              className='form-control rounded-0'
              onChange={(e) =>
                setValues({ ...values, mangaClass: e.target.value })
              }
            />
          </div>

          <button type='submit' className='btn btn-success rounded-0 w-100'>
            Submit Manga
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateManga;
