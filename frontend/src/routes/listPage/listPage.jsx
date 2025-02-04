import React, { Suspense } from "react";
import "./listPage.scss";
import { listData } from "../../lib/dummyData";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { Await, useLoaderData } from "react-router-dom";

const ListPage = () => {
  const posts = useLoaderData();
  return (
    <div className="listPage">
      <div className="list">
        <div className="wrapper">
          <Filter />

          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={posts.postResponse}
              errorElement={<p>Error Loading the posts!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="map">
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={posts.postResponse}
            errorElement={<p>Error Loading the posts!</p>}
          >
            {(postResponse) => <Map items={postResponse.data} /> 
            }
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default ListPage;
