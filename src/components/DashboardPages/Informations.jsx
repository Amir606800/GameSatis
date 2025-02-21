import { Accordion } from "react-bootstrap";
import { UserAuth } from "../../Context/AuthContext";
import { useMemo } from "react";
import { LuUserRound } from "react-icons/lu";
import { FaEyeSlash } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import supabase from "../../helpers/supabaseClient";

const Informations = () => {
  const { userProfile, session } = UserAuth();
  const mUserProfile = useMemo(() => userProfile, [userProfile]);
  console.log(mUserProfile);
  console.log(session);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.updateUser({
      phone: "+994556628495",
    });
    if (error) {
      alert(error);
      return;
    }
    if (data) {
      alert("Phone added");
    } else {
      alert("Problem occured");
    }
  };
  return (
    <div className="Information-profile text-center d-flex justify-content-center align-items-start h-100 ">
      <Accordion
        className="h-100 w-100 bg-dark "
        defaultActiveKey="1"
        flush={true}
      >
        <Accordion.Item className="bg-dark" eventKey="1">
          <Accordion.Header className="bg-dark">
            <LuUserRound /> <span>Kişisel Bilgiler</span>
          </Accordion.Header>
          <Accordion.Body className="bg-dark p-3 ">
            <div className="d-flex flex-column gap-3 w-100">
              <div className="d-flex gap-4 w-100 justify-content-center">
                <div className="position-relative w-50 ">
                  <input
                    className="w-100 h-100 rounded-2 text-end  px-3"
                    type="text"
                    readOnly
                    style={{
                      cursor: "default",
                      padding: "12px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                    onFocus={(e) => (e.target.style.outline = "none")}
                    value={mUserProfile.display_name}
                  />
                  <div
                    className="PlaceHold position-absolute top-50 translate-middle-y text-body-tertiary"
                    style={{ left: "14px", fontSize: "12px" }}
                  >
                    Ad Soyad:{" "}
                  </div>
                </div>
                <div className="position-relative w-50 ">
                  <input
                    className="w-100 h-100 rounded-2 text-end  px-3"
                    type="text"
                    readOnly
                    style={{
                      cursor: "default",
                      padding: "12px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                    onFocus={(e) => (e.target.style.outline = "none")}
                    value={session.user.email}
                  />
                  <div
                    className="PlaceHold position-absolute top-50 translate-middle-y text-body-tertiary"
                    style={{ left: "14px", fontSize: "12px" }}
                  >
                    E-Posta Adresi:{" "}
                  </div>
                </div>
              </div>
              <div className="d-flex gap-4 w-100 justify-content-center">
                <div className="position-relative w-50 ">
                  <input
                    className="w-100 h-100 rounded-2 text-end  px-3"
                    type="text"
                    readOnly
                    style={{
                      cursor: "default",
                      padding: "12px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                    onFocus={(e) => (e.target.style.outline = "none")}
                    value={" "}
                  />
                  <div
                    className="PlaceHold position-absolute top-50 translate-middle-y text-body-tertiary"
                    style={{ left: "14px", fontSize: "12px" }}
                  >
                    Doğum Tarihi:
                  </div>
                </div>
                <div className="position-relative w-50 ">
                  <input
                    className="w-100 h-100 rounded-2 text-end  px-3"
                    type="text"
                    readOnly
                    style={{
                      color: "greenyellow",
                      cursor: "default",
                      padding: "12px",
                      fontSize: "12px",
                    }}
                    onFocus={(e) => (e.target.style.outline = "none")}
                    value={session.user.phone}
                  />
                  <div
                    className="PlaceHold position-absolute top-50 translate-middle-y text-body-tertiary"
                    style={{ left: "14px", fontSize: "12px" }}
                  >
                    Telefon Numarası:
                  </div>
                  {session.user.phone ? (
                    " "
                  ) : (
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="btn end-0 top-50 position-absolute translate-middle-y btn-light"
                    >
                      Ekle
                    </button>
                  )}
                  <div
                    className="modal align-content-center"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Telefon Numarası Ekleme
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <form onSubmit={handlePhoneSubmit}>
                          <div className="modal-body d-flex justify-content-center align-items-center gap-3">
                            <span className="fw-bold">+994</span>
                            <input
                              placeholder="5X XXX XX XX"
                              className="w-25 py-2"
                              type="tel"
                            />
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-bs-dismiss="modal"
                            >
                              İptal
                            </button>
                            <button type="submit" className="btn btn-success">
                              Ekle
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-4 w-100 justify-content-center">
                <button
                  className="Privacy-button w-50 h-100 rounded-2 text-end text-center px-3"
                  style={{
                    cursor: "pointer",
                    padding: "12px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  <FaEyeSlash /> Kişisel Bilgileri Gizle{" "}
                </button>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        {/* Security like password */}
        <Accordion.Item className="bg-dark" eventKey="2">
          <Accordion.Header className="bg-dark">
            <IoShieldCheckmarkOutline />
            <span>Güvenlik Tercihleri</span>
          </Accordion.Header>
          <Accordion.Body className="bg-dark">
            <form onSubmit={handleFormSubmit}>
              <div className="d-flex flex-column gap-3 w-100">
                <div className="d-flex gap-4 w-100 justify-content-center">
                  <div className="position-relative w-50 ">
                    <input
                      className="w-100 h-100 rounded-2 text-end  px-3"
                      type="password"
                      readOnly
                      style={{
                        cursor: "default",
                        padding: "12px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                      onFocus={(e) => (e.target.style.outline = "none")}
                      value={"password"}
                    />
                    <div
                      className="PlaceHold position-absolute top-50 translate-middle-y text-body-tertiary"
                      style={{ left: "14px", fontSize: "12px" }}
                    >
                      Şifre:
                    </div>
                  </div>
                  <div className="position-relative w-50 ">
                    <input
                      className="w-100 h-100 rounded-2 text-end  px-3"
                      type="text"
                      readOnly
                      style={{
                        cursor: "default",
                        padding: "12px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                      onFocus={(e) => (e.target.style.outline = "none")}
                      value={session.user.email}
                    />
                    <div
                      className="PlaceHold position-absolute top-50 translate-middle-y text-body-tertiary"
                      style={{ left: "14px", fontSize: "12px" }}
                    >
                      E-Posta Onaylı Geçiş:{" "}
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-4 w-100 justify-content-center">
                  <div className="position-relative w-50 ">
                    <input
                      className="w-100 h-100 rounded-2 text-end  px-3"
                      type="text"
                      readOnly
                      style={{
                        cursor: "default",
                        padding: "12px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                      onFocus={(e) => (e.target.style.outline = "none")}
                      value={" "}
                    />
                    <div
                      className="PlaceHold position-absolute top-50 translate-middle-y text-body-tertiary"
                      style={{ left: "14px", fontSize: "12px" }}
                    >
                      SMS Onaylı Geçiş:
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </Accordion.Body>
        </Accordion.Item>

        {/* Notification section*/}
        <Accordion.Item className="bg-dark" eventKey="3">
          <Accordion.Header className="bg-dark">
            <IoMdNotificationsOutline />
            <span>Bildirim Tercihleri</span>
          </Accordion.Header>
          <Accordion.Body className="bg-dark">
            <form onSubmit={handleFormSubmit}>
              <div className="d-flex flex-column gap-3 w-100">
                <div className="d-flex gap-4 w-100 justify-content-center">
                  <div className="position-relative w-50 ">
                    <input
                      className="w-100 h-100 rounded-2 text-end  px-3"
                      type="text"
                      readOnly
                      style={{
                        cursor: "default",
                        padding: "12px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                      onFocus={(e) => (e.target.style.outline = "none")}
                      value={mUserProfile.display_name}
                    />
                    <div
                      className="PlaceHold position-absolute top-50 translate-middle-y text-body-tertiary"
                      style={{ left: "14px", fontSize: "12px" }}
                    >
                      Ad Soyad:{" "}
                    </div>
                  </div>
                  <div className="position-relative w-50 ">
                    <input
                      className="w-100 h-100 rounded-2 text-end  px-3"
                      type="text"
                      readOnly
                      style={{
                        cursor: "default",
                        padding: "12px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                      onFocus={(e) => (e.target.style.outline = "none")}
                      value={session.user.email}
                    />
                    <div
                      className="PlaceHold position-absolute top-50 translate-middle-y text-body-tertiary"
                      style={{ left: "14px", fontSize: "12px" }}
                    >
                      E-Posta Adresi:{" "}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Informations;
