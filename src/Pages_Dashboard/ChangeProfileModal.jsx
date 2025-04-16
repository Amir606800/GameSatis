import React, { useMemo, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { UserAuth } from "../Context/AuthContext";
import { useTranslate } from "../helpers/Language/Translator";
import supabase from "../helpers/supabaseClient";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ChangeProfileModal = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { session, userProfile, signOut } = UserAuth();
  const mUserProfile = useMemo(() => userProfile, [userProfile]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [changes, setChanges] = useState({
    first_name: mUserProfile.first_name,
    last_name: mUserProfile.last_name,
    email: session.user.email,
    date: mUserProfile.DOB,
  });
  const t = useTranslate();
  const handleSubmit = async () => {
    const { data: emailData, error: errorEmail } =
      await supabase.auth.updateUser({
        email: changes.email,
      });
    if (errorEmail) {
      alert(errorEmail);
      return;
    }
    const { error: errorChanges } = await supabase
      .from("profiles")
      .update({
        first_name: changes.first_name,
        last_name: changes.last_name,
        DOB: changes.date,
      })
      .eq("id", mUserProfile.id);
    if (errorChanges) {
      alert(errorChanges);
      return;
    }

    Swal.fire({
      title: "Successfully changed!",
      icon: "success",
      background: "#222631", // Custom dark background (optional)
      color: "#fff", // Text color for dark theme
      confirmButtonText: "Continue",
      confirmButtonColor: "#3085d6",
    }).then(async () => {
      if (changes.email != session.user.email) {
        const { error } = await signOut();
        if (error) {
          Swal.fire("Oops!", "Failed to sign out.", "error");
          return;
        }else{
            Swal.fire("Email Confirmation",'Please confirm your email from your inbox',"success").then(()=>navigate('/giris-yap'))
        }
      }
    });
  };
  return (
    <>
      <button
        onClick={handleShow}
        className="Privacy-button Profile_input_fields w-25 h-100 rounded-2 text-end text-center px-3 cur-pointer"
      >
        Profili Degistir
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Modal.Body>
            <div className="d-flex flex-column gap-3 w-100 ">
              <div className="position-relative w-100 ">
                <input
                  className="Profile_input_fields w-100 h-100 rounded-2 text-end  px-3"
                  type="text"
                  name="first_name"
                  required
                  onFocus={(e) => (e.target.style.outline = "none")}
                  onChange={(e) =>
                    setChanges((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  value={changes.first_name}
                />
                <div
                  className="PlaceHold position-absolute top-50 translate-middle-y text-body-tertiary"
                  style={{ left: "14px", fontSize: "12px" }}
                >
                  Name
                </div>
              </div>
              <div className="position-relative w-100 ">
                <input
                  className="Profile_input_fields w-100 h-100 rounded-2 text-end  px-3"
                  type="text"
                  name="last_name"
                  required
                  onFocus={(e) => (e.target.style.outline = "none")}
                  onChange={(e) =>
                    setChanges((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  value={changes.last_name}
                />
                <div
                  className="PlaceHold position-absolute top-50 translate-middle-y text-body-tertiary"
                  style={{ left: "14px", fontSize: "12px" }}
                >
                  Surname
                </div>
              </div>
              <div className="position-relative w-100">
                <input
                  className=" Profile_input_fields w-100 h-100 rounded-2 text-end  px-3"
                  type="email"
                  name="email"
                  required
                  onFocus={(e) => (e.target.style.outline = "none")}
                  onChange={(e) =>
                    setChanges((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  value={changes.email}
                />
                <div
                  className="PlaceHold position-absolute top-50 translate-middle-y text-body-tertiary"
                  style={{ left: "14px", fontSize: "12px" }}
                >
                  {t("informations.email")}
                </div>
              </div>
              <div className=" Wrapped-div d-flex gap-4 w-100 justify-content-center">
                <div className="position-relative w-100">
                  <input
                    className="Profile_input_fields w-100 h-100 rounded-2 text-end  px-3"
                    type="date"
                    name="date"
                    required
                    onFocus={(e) => (e.target.style.outline = "none")}
                    onChange={(e) =>
                      setChanges((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    value={changes.date}
                  />
                  <div
                    className="PlaceHold position-absolute top-50 translate-middle-y text-body-tertiary"
                    style={{ left: "14px", fontSize: "12px" }}
                  >
                    {t("informations.date")}
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="button" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ChangeProfileModal;
