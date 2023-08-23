import React, { Component } from "react";
import Link from "../../components/Link/Link";
import List from "../../components/List/List";
import styled from "styled-components";

const ProfileWrapper = styled.div`
  width: 50%;
  margin: 10px auto;
`;

const Avatar = styled.img`
  width: 150px;
`;

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      repos: [],
      loading: true,
      error: "",
    };
  }
  async componentDidMount() {
    try {
      const profile = await fetch("https://api.github.com/users/zac4j");
      const profileJson = await profile.json();

      if (profileJson) {
        const repos = await fetch(profileJson.repos_url);
        const reposJson = await repos.json();
        this.setState({
          data: profileJson,
          repos: reposJson,
          loading: false,
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message,
      });
    }
  }

  render() {
    const { data, loading, repos, error } = this.state;

    if (loading || error) {
      return <div>{loading ? `Loading...` : error}</div>;
    }

    const items = [
      { label: "home", value: <Link url={data.html_url} title={data.login} /> },
      { label: "name", value: data.name },
      { label: "location", value: data.location },
      { label: "bio", value: data.bio },
      { label: "repos", value: data.repos_url },
      { label: "blog", value: data.blog },
    ];

    const projects = repos.map((repo) => ({
      label: repo.name,
      value: <Link url={repo.html_url} title={repo.html_url} />,
    }));

    return (
      <ProfileWrapper className="Profile-container">
        <Avatar className="Profile-avatar" src={data.avatar_url} alt="avatar" />
        <List title="Profile" items={items} />
        <List title="Projects" items={projects} />
      </ProfileWrapper>
    );
  }
}

export default Profile;
