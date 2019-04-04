import React from 'react';

const url = "https://dog.ceo/api/breeds/image/random";

export default class DogVotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: true,
            items: [],
            tmpItems: ""
        }
    }

    fetchImages(url) {
        fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
              if(url.includes("3")) {
                this.setState({
                    items: result.message.slice(0,2),
                    tmpItems: result.message.slice(2,3),
                    isLoaded: true
                })
              } else {
                  this.setState({
                      tmpItems: result.message,
                      isLoaded: true
                  });
              }
          },
          (error) => {
            this.setState({
                isLoaded: true,
                error
            })
          }
        )
    }

    componentDidMount() {
        this.fetchImages(url+"/3");
    }

    upVote(id) {
        var tmp = this.state.items.slice();
        tmp[Math.abs(id * id - 1)] = this.state.tmpItems;
        this.setState({
            items: tmp
        });
        this.fetchImages(url);
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return(
                items.map((item, i) => (
                    <div key={"col"+i} className="col-6 text-center p-1">
                        <img
                            key={"img"+i}
                            src={item}
                            alt="Not Found."
                            onClick={() => {this.upVote(i)}}
                            className="dog-choice"
                        />
                    </div>
                ))
            );
        }
    }
}