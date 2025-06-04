import axios from 'axios'
import * as XLSX from 'xlsx'

export const exportToExcel = async() => {
  const { data } = await axios.get('/api/register/')

  const rows = data.registers.map((row: any) => {
    const register = new Date(row.created_at)
    const day = register.getDate().toString().length < 2 ? register.getDate().toString().padStart(2, "0") : register.getDate();
    const month = register.getMonth();
    const year = register.getFullYear();

    return {
      id: row.id,
      nome: row.nome,
      email: row.email,
      cargo: row.cargo,
      empresa: row.empresa,
      data_cadastro: `${day}/${month + 1}/${year}`,
    }
  });

  // create workbook and worksheet
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(rows);

  XLSX.utils.book_append_sheet(workbook, worksheet, "Cadastros");

  // customize header names
  XLSX.utils.sheet_add_aoa(worksheet, [
    ["id", "Nome", "E-mail", "Cargo", "empresa", "Data Cadastro"],
  ]);

  const now = new Date()

  const fileName = "cadastro_curicaca_" + now.toLocaleDateString() + ".xlsx"
  XLSX.writeFile(workbook, fileName, { compression: true });

}