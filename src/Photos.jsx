import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Pagination,
    PaginationItem,
    PaginationLink,
    Spinner,
} from 'reactstrap';
import Photo from './Photo';

const Photos = () => {
    const [photoStore, setPhotoStore] = useState([]);
    const [loading, setLoading] = useState(false);
    const [albumNo, setAlbumNo] = useState(1);
    useEffect(() => {
        setLoading(true);
        axios
            .get(
                `https://jsonplaceholder.typicode.com/albums/${albumNo}/photos`
            )
            .then((res) => {
                setPhotoStore(res.data);
                setLoading(false);
            });
    }, [albumNo]);
    return (
        <div>
            <h1 className="mt-3">Photos App</h1>
            <h5 className="mt-3">Displaying photos of album {albumNo}</h5>
            {loading ? (
                <Spinner role="status">Loading...</Spinner>
            ) : (
                photoStore.map((val) => {
                    return (
                        <Photo
                            imgthumbnailurl={val.thumbnailUrl}
                            title={val.title}
                            img={val.url}
                        />
                    );
                })
            )}
            <div>
                <Pagination className="col-lg-3 col-md-3 mt-3 mx-auto">
                    <PaginationItem>
                        <PaginationLink onClick={() => setAlbumNo(1)}>
                            First
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            onClick={() => {
                                if (albumNo > 1) {
                                    setAlbumNo(albumNo - 1);
                                } else {
                                    setAlbumNo(1);
                                }
                            }}
                        >
                            Previous
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={() => setAlbumNo(1)}>
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={() => setAlbumNo(2)}>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={() => setAlbumNo(3)}>
                            3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={() => setAlbumNo(4)}>
                            4
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={() => setAlbumNo(5)}>
                            5
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            onClick={() => {
                                if (albumNo >= 100) {
                                    setAlbumNo(100);
                                } else {
                                    setAlbumNo(albumNo + 1);
                                }
                            }}
                        >
                            Next
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={() => setAlbumNo(100)}>
                            Last
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            </div>
        </div>
    );
};
export default Photos;
