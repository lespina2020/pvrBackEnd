module.exports = {
  fecha(val) {
    if (val) {
      let fechas = val.split("-");
      fechas = `${fechas[2]}-${fechas[1]}-${fechas[0]}`;
      return fechas;
    }
  },
  getPagination(page, size) {
    const limit = size ? +size : 10;
    const offset = page ? limit * (page - 1) : 0;

    return { limit, offset };
  },
  getPagingData(data, page, limit) {
    const { count: totalItems, rows: tu } = data;

    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, tu, totalPages, currentPage };
  },
};
