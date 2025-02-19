const ExpensesList = () => {
  return (
    <table id="expenses-table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Groceries</td>
          <td>50.00</td>
          <td>Food</td>
        </tr>
        <tr>
          <td>Bus Ticket</td>
          <td>2.50</td>
          <td>Transportation</td>
        </tr>
        <tr>
          <td>Movie Tickets</td>
          <td>15.00</td>
          <td>Entertainment</td>
        </tr>
        <tr>
          <td>Doctor Appointment</td>
          <td>100.00</td>
          <td>Health</td>
        </tr>
        <tr>
          <td>Electricity Bill</td>
          <td>60.00</td>
          <td>Utilities</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total:</td>
          <td>
            <span id="total-amount">227.50</span>
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpensesList;
