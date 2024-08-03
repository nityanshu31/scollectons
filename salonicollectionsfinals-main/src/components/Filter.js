import React from 'react';

const Filter = ({ minPrice, maxPrice, selectedBrands, rating, offers, setMinPrice, setMaxPrice, setSelectedBrands, setRating, setOffers }) => {
    const filterSidebarStyle = {
        width: '250px',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        borderRight: '1px solid #ddd',
        overflowY: 'auto',
        height: '100vh',
    };

    const headingStyle = {
        fontSize: '18px',
        marginBottom: '20px',
    };

    const filterSectionStyle = {
        marginBottom: '20px',
    };

    const filterSectionHeadingStyle = {
        fontSize: '16px',
        marginBottom: '10px',
    };

    const priceRangeStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const priceRangeInputsStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    };

    const inputTextStyle = {
        width: '45%',
        padding: '5px',
        border: '1px solid #ddd',
        borderRadius: '4px',
    };

    const handlePriceRangeChange = (e) => {
        const value = e.target.value;
        if (e.target.name === 'min') {
            setMinPrice(value);
        } else {
            setMaxPrice(value);
        }
    };

    const handleCheckboxChange = (e, setSelectedState) => {
        const { value, checked } = e.target;
        setSelectedState(prevState => {
            if (checked) {
                return [...prevState, value];
            } else {
                return prevState.filter(item => item !== value);
            }
        });
    };

    return (
        <aside style={filterSidebarStyle}>
            <h3 style={headingStyle}>Filters</h3>

            <div style={filterSectionStyle}>
                <h4 style={filterSectionHeadingStyle}>Price</h4>
                <div style={priceRangeStyle}>
                    <input
                        type="range"
                        min="0"
                        max="1500"
                        value={minPrice || 0}
                        onChange={(e) => handlePriceRangeChange(e)}
                        name="min"
                    />
                    <input
                        type="range"
                        min="0"
                        max="1500"
                        value={maxPrice || 1500}
                        onChange={(e) => handlePriceRangeChange(e)}
                        name="max"
                    />
                    <div style={priceRangeInputsStyle}>
                        <input
                            type="text"
                            placeholder="Min"
                            style={inputTextStyle}
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Max"
                            style={inputTextStyle}
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div style={filterSectionStyle}>
                <h4 style={filterSectionHeadingStyle}>Brand</h4>
                <label>
                    <input
                        type="checkbox"
                        value="Brand 1"
                        checked={selectedBrands.includes('Brand 1')}
                        onChange={(e) => handleCheckboxChange(e, setSelectedBrands)}
                    /> Brand 1
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="Brand 2"
                        checked={selectedBrands.includes('Brand 2')}
                        onChange={(e) => handleCheckboxChange(e, setSelectedBrands)}
                    /> Brand 2
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="Brand 3"
                        checked={selectedBrands.includes('Brand 3')}
                        onChange={(e) => handleCheckboxChange(e, setSelectedBrands)}
                    /> Brand 3
                </label>
            </div>

            <div style={filterSectionStyle}>
                <h4 style={filterSectionHeadingStyle}>Customer Ratings</h4>
                <label>
                    <input
                        type="checkbox"
                        value="4"
                        checked={rating.includes(4)}
                        onChange={(e) => handleCheckboxChange(e, setRating)}
                    /> 4★ & above
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="3"
                        checked={rating.includes(3)}
                        onChange={(e) => handleCheckboxChange(e, setRating)}
                    /> 3★ & above
                </label>
            </div>

            <div style={filterSectionStyle}>
                <h4 style={filterSectionHeadingStyle}>Offers</h4>
                <label>
                    <input
                        type="checkbox"
                        value="Buy More, Save More"
                        checked={offers.includes('Buy More, Save More')}
                        onChange={(e) => handleCheckboxChange(e, setOffers)}
                    /> Buy More, Save More
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="No Cost EMI"
                        checked={offers.includes('No Cost EMI')}
                        onChange={(e) => handleCheckboxChange(e, setOffers)}
                    /> No Cost EMI
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="Special Price"
                        checked={offers.includes('Special Price')}
                        onChange={(e) => handleCheckboxChange(e, setOffers)}
                    /> Special Price
                </label>
            </div>
        </aside>
    );
};

export default Filter;
