import renderHTML from 'react-render-html';
import Link from 'next/link';
import { useState, useEffect } from "react";
import { listSearch } from "../../actions/blog";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Search = () => {
    const [values, setValues] = useState({
        search: undefined,
        results: [],
        searched: false,
        message: ''
    });

    const {search, results, searched, message} = values;

    const searchSubmit = e => {
        e.preventDefault();
        listSearch({search}).then(data => {
            setValues({...values, results: data, searched: true, message: `${data.length} blogs found`})
        });
        setShow(true); // TEST
    };

    const handleChange = e => {
        // console.log(e.target.value);
        setValues({...values, search: e.target.value, searched: false, results: []})
    };

    const searchedBlogs = (results = []) => {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>{message && <p>{message}</p>}</Modal.Header>
                <Modal.Body>
                    {results.map((blog, i) => {
                        return (
                            <div key={i}>
                                <Link href={`/blogs/${blog.slug}`}><a>{blog.title}</a></Link>
                            </div>
                        );
                    })}
                </Modal.Body>
            </Modal>
        );
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const searchForm = () => {
        return (
            <>
                <Form inline className="searchbox transparent">
                    <FormControl type="search" placeholder="Search Posts" onChange={handleChange} />
                    <Button onClick={searchSubmit}>
                        <svg class="bi bi-search" width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12.442 12.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"></path>
                        <path fill-rule="evenodd" d="M8.5 14a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM15 8.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"></path>
                        </svg>
                    </Button>
                </Form>
                {searched && <div style={{position: `fixed`, zIndex: `10000`}}>{searchedBlogs(results)}</div>}
            </>
        );
    };

    return (
        <div style={{width: `100%`}}>{searchForm()}</div>
    )
};

export default Search;