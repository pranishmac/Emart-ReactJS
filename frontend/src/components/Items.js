import React, { Component } from 'react';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      categories: [],
    };
  }

  componentDidMount() {
    // Replace the API URL with your actual API endpoint
    fetch('/items/itemapi')
      .then(response => response.json())
      .then(data => {
        // Assuming your API response has 'items' and 'categories' properties
        // console.log(response);
        this.setState({
          items: data,
          categories: data.map(item => item.category),
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  render() {
    const { items, categories } = this.state;

    return (
      <div>
        <div className="mt-6 px-6 py-12 bg-gray-100 rounded-xl">
          <h2 className="mb-12 text-2xl text-center">Newest items</h2>

          <div className="grid grid-cols-3 gap-3">
            {items.map(item => (
              <div key={item.id}>
                <a href={`/item/${item.id}`}>
                  <div>
                    <img src={item.image} alt={item.name} className="rounded-t-xl" />
                  </div>

                  <div className="p-6 bg-white rounded-b-xl">
                    <h2 className="text-2xl">{item.name}</h2>
                    <p className="text-gray-500">Price: {item.price}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>       
      </div>
    );
  }
}

export default Items;
