import React from "react";

function Contact({ contact: { name, phone, email, id,fav }, dltContact,favToggle }) {
  return (
    <>
      <table className="table contact">
        <tbody>
          <tr className="name">
            <td>Name :</td>
            <td>{name} <i onClick={()=>{favToggle(id)}} className={ fav?"fas fa-star text-warning icon": "far fa-star text-warning icon"}></i></td>
          </tr>
          <tr>
            <td>Email :</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Phone :</td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => {
                  dltContact(id);
                }}
                type="button"
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Contact;
