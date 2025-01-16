export async function FormatDate(formattedDate) {
  const [year, month, day] = formattedDate.split("-");
  return await new Date(`${year}-${month}-${day}T00:00:00.000Z`).toISOString();
}
