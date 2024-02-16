const CustomButton = ({
  button_name,
  btn_class_name,
  content_class_name,
  padding_x,
  padding_y,
}) => {
  return (
    <button type="button" className={`btn ${btn_class_name}`}>
      <div
        className={content_class_name}
        style={{ padding: `${padding_y}px ${padding_x}px` }}
      >
        {button_name}
      </div>
    </button>
  )
}

export default CustomButton
