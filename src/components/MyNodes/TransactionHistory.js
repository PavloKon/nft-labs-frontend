import symbolIcon from '../../assets/images/symbol-icon.png'
import '../../assets/scss/mynodes/transactionHistory.scss'
import CustomButton from '../CustomButton/CustomButton'

const TransactionHistory = () => {
  const transactions = [
    {
      date: '4 JUNE 2022',
      time: '14.00',
      account: '459.57',
    },

    {
      date: '4 JUNE 2022',
      time: '14.00',
      account: '459.57',
    },
    {
      date: '4 JUNE 2022',
      time: '14.00',
      account: '459.57',
    },
    {
      date: '4 JUNE 2022',
      time: '14.00',
      account: '459.57',
    },
    {
      date: '4 JUNE 2022',
      time: '14.00',
      account: '459.57',
    },
    {
      date: '4 JUNE 2022',
      time: '14.00',
      account: '459.57',
    },
    {
      date: '4 JUNE 2022',
      time: '14.00',
      account: '459.57',
    },
    {
      date: '4 JUNE 2022',
      time: '14.00',
      account: '459.57',
    },
    {
      date: '4 JUNE 2022',
      time: '14.00',
      account: '459.57',
    },
    {
      date: '4 JUNE 2022',
      time: '14.00',
      account: '459.57',
    },
  ]
  return (
    <section className="history--container">
      <h3 className="history--container__title">TRANSACTION HISTORY</h3>
      <div className="table--wrapper">
        <table className="table--wrapper__table">
          <tbody>
            {transactions.map((item, index) => (
              <tr key={index} className="table--wrapper__table--row">
                <td className="col-symbol tex-start">
                  <div className="img--container">
                    <img src={symbolIcon} alt="symbol" />
                  </div>
                </td>
                <td className="col-look text-start">
                  <span className="bb_18">look distribution</span>
                </td>
                <td className="col-date text-start">
                  <div className="bb_18_medium pb-1">Date</div>
                  <div className="bb_22">4 june,2022</div>
                </td>
                <td className="col-time text-start">
                  <div className="bb_18_medium pb-1">Time</div>
                  <div className="bb_22">14:00</div>
                </td>
                <td className="col-amount text-start">
                  <div className="bb_18_medium pb-1">Amount</div>
                  <div className="bb_22">459.57</div>
                </td>
                <td className="col-button text-end">
                  <CustomButton
                    button_name="See invoice"
                    btn_class_name="btn-outline-primary"
                    content_class_name="bb_16_medium"
                    padding_x={13}
                    padding_y={4}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CustomButton
        button_name="Show More"
        btn_class_name="btn-primary btn--show__more"
        content_class_name="bb_18"
        padding_y={10}
        padding_x={27.5}
      />
    </section>
  )
}

export default TransactionHistory
