import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = event => {
        this.setState({ term: event.target.value })
    };

    onFormSubmit = event => {
        event.preventDefault();
        
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment" >
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label style={{color: 'green'}}>Video Search</label>
                        <input 
                            type="text" 
                            placeholder="Search"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;