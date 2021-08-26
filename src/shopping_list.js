class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>From JS - Instagram</li>
          <li>From JS - WhatsApp</li>
          <li>From JS - Oculus</li>
        </ul>
      </div>
    );
  }
}
