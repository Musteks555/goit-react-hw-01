import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
    return (
        <div className={css.profileContainer}>
            <div className={css.profileInfoContainer}>
                <img
                    src={image}
                    alt="User avatar"
                    className={css.profileImg}
                />
                <p className={css.profileName}>{name}</p>

                <p className={css.profileText}>@{tag}</p>

                <p className={css.profileText}>{location}</p>
            </div>

            <ul className={css.profileList}>
                <li className={css.profileItem}>
                    <span className={css.profileType}>Followers</span>
                    <span className={css.profileNumber}>{followers}</span>
                </li>

                <li className={css.profileItem}>
                    <span className={css.profileType}>Views</span>
                    <span className={css.profileNumber}>{views}</span>
                </li>

                <li className={css.profileItem}>
                    <span className={css.profileType}>Likes</span>
                    <span className={css.profileNumber}>{likes}</span>
                </li>
            </ul>
        </div>
    )
}

export default Profile