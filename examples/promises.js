const empleados = [
  {
    id: 1,
    nombre: "michael",
  },
  { id: 2, nombre: "angelo" },
];
const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 3000,
  },
];
const getEmpleado = (id) => {
  const empleado = empleados.find((e) => e.id === id);
  return empleado;
};
console.log(getEmpleado(1));
