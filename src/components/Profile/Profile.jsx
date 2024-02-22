import clsx from "clsx";
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
    return (
        <div className={clsx(css.profileContainer)}>
            <div className={clsx(css.profileInfoContainer)}>
                <img
                    src={image}
                    alt="User avatar"
                    className={clsx(css.profileImg)}
                />
                <p className={clsx(css.profileName)}>{name}</p>

                <p className={clsx(css.profileText, css.profileTag)}>@{tag}</p>

                <p className={clsx(css.profileText)}>{location}</p>
            </div>

            <ul className={clsx(css.profileList)}>
                <li className={clsx(css.profileItem)}>
                    <span className={clsx(css.profileType)}>Followers</span>
                    <span className={clsx(css.profileNumber)}>{followers}</span>
                </li>

                <li className={clsx(css.profileItem)}>
                    <span className={clsx(css.profileType)}>Views</span>
                    <span className={clsx(css.profileNumber)}>{views}</span>
                </li>

                <li className={clsx(css.profileItem)}>
                    <span className={clsx(css.profileType)}>Likes</span>
                    <span className={clsx(css.profileNumber)}>{likes}</span>
                </li>
            </ul>
        </div>
    )
}

export default Profile