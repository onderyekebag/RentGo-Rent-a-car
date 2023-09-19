import Swal from "sweetalert2";

export const question = (title, text) => {
  return Swal.fire({
    title,
    text,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#1C1E32",
  });
};

export const toast = (title, icon = "info", timer = 3000) => {
  Swal.fire({
    position: "center",
    icon,
    title,
    showConfirmButton: false,
    timer,
  });
};
