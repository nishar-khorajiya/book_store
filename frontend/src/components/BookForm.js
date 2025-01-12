import React from 'react';

function BookForm({ form, handleChange, handleSubmit }) {
    return (
        <div>
            <h3>{form._id ? 'Edit Book' : 'Add New Book'}</h3>
            <form onSubmit={handleSubmit} >
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            id="txtTitle"
                            placeholder="Book Title"
                            value={form.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="authors">Author</label>
                        <input
                            type="text"
                            name="authors"
                            className="form-control"
                            id="txtAuthors"
                            placeholder="Authors (comma separated)"
                            value={form.authors}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="genre">Category</label>
                        <input
                            type="text"
                            name="genre"
                            className="form-control"
                            placeholder="Category"
                            value={form.genre}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="form-label">Publisher</label>
                        <input
                            type="text"
                            name="publisher"
                            className="form-control"
                            placeholder="Publisher"
                            value={form.publisher}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="publicationYear">Publication Year</label>
                        <input
                            type="number"
                            name="publicationYear"
                            className="form-control"
                            placeholder="Publication Year"
                            value={form.publicationYear}
                            onChange={handleChange}
                            min="1000"
                            max={new Date().getFullYear()}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="edition">Edition</label>
                        <input
                            type="number"
                            name="edition"
                            className="form-control"
                            placeholder="Edition"
                            value={form.edition}
                            min="1"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="language">Language</label>
                        <input
                            type="text"
                            name="language"
                            className="form-control"
                            placeholder="Language"
                            value={form.language}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            name="price"
                            className="form-control"
                            placeholder="Price"
                            value={form.price}
                            onChange={handleChange}
                            min="0.01"
                            step="0.01"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    {form._id ? 'Update Book' : 'Add Book'}
                </button>
            </form>
        </div>
    );
}

export default BookForm;
