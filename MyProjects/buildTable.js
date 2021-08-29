function buildTable(row, column, header = [], data = []) {

    document.write('<table>');// build the head of the table
    document.write('<thead>');
    document.write('<tr>');
    for (let i = 0; i < column; i++) {
        document.write(`<th> ${header[i]} </th>`);
    }
    document.write('</tr>');
    document.write('</thead>');

    document.write('<tbody>');// build the body of the table
    for (let i = 1; i < row; i++) {
        document.write('<tr>');
        for (let j = 0; j < column; j++) {
            document.write(`<td> ${data[j]} </td>`)
        };
        data.splice(0, column);
        document.write('</tr>');
    }
    document.write('</tbody>');

    document.write('</table>');

}