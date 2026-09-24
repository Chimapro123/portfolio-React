import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

import "./Reviews.css";


function Reviews() {
  const [reviews, setReviews] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
  });

  const [adminData, setAdminData] = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [adminLoading, setAdminLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [adminMessage, setAdminMessage] = useState("");

  // =========================
  // GET REVIEWS
  // =========================

  const fetchReviews = async () => {
    setLoadingReviews(true);

    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error loading reviews:", error);
      setMessage("Unable to load reviews.");
    } else {
      setReviews(data || []);
    }

    setLoadingReviews(false);
  };

  // =========================
  // CHECK ADMIN LOGIN
  // =========================

  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setUser(user);
  };

  useEffect(() => {
    fetchReviews();
    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // =========================
  // HANDLE REVIEW FORM
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // =========================
  // SUBMIT REVIEW
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    if (!formData.name.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      setMessage("Please enter your email.");
      return;
    }

    if (!formData.review.trim()) {
      setMessage("Please write your review.");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from("reviews")
      .insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        review: formData.review.trim(),
      })
      .select()
      .single();

    if (error) {
      console.error("Error submitting review:", error);
      setMessage("Something went wrong. Please try again.");
    } else {
      setReviews((previousReviews) => [
        data,
        ...previousReviews,
      ]);

      setFormData({
        name: "",
        email: "",
        review: "",
      });

      setMessage("Your review has been submitted.");
    }

    setLoading(false);
  };

  // =========================
  // ADMIN LOGIN
  // =========================

  const handleAdminChange = (e) => {
    const { name, value } = e.target;

    setAdminData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();

    setAdminMessage("");

    if (!adminData.email || !adminData.password) {
      setAdminMessage("Please enter your email and password.");
      return;
    }

    setAdminLoading(true);

    const { data, error } =
      await supabase.auth.signInWithPassword({
        email: adminData.email,
        password: adminData.password,
      });

    if (error) {
      console.error("Login error:", error);
      setAdminMessage("Invalid email or password.");
    } else {
      setUser(data.user);
      setAdminData({
        email: "",
        password: "",
      });

      setAdminMessage("Admin login successful.");
    }

    setAdminLoading(false);
  };

  // =========================
  // ADMIN LOGOUT
  // =========================

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut({
      scope: "local",
    });

    if (error) {
      console.error("Logout error:", error);
      return;
    }

    setUser(null);
    setAdminMessage("");
  };

  // =========================
  // DELETE REVIEW
  // =========================

  const handleDeleteReview = async (reviewId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this review?"
    );

    if (!confirmed) {
      return;
    }

    const { error } = await supabase
      .from("reviews")
      .delete()
      .eq("id", reviewId);

    if (error) {
      console.error("Delete error:", error);
      alert("Unable to delete this review.");
      return;
    }

    setReviews((previousReviews) =>
      previousReviews.filter(
        (review) => review.id !== reviewId
      )
    );
  };

  return (
    <section id="reviews"className="reviews-page">
      <div className="reviews-container">

        {/* =========================
            PAGE HEADER
        ========================= */}

        <div className="reviews-header">
          <h1>Reviews</h1>

          <p>
            Share your experience working with me.
          </p>
        </div>

        {/* =========================
            REVIEW FORM
        ========================= */}

        <div className="review-form-card">
          <h2>Leave a Review</h2>

          <form onSubmit={handleSubmit}>

            <div className="review-input-group">
              <label htmlFor="name">
                Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="review-input-group">
              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="review-input-group">
              <label htmlFor="review">
                Your Review
              </label>

              <textarea
                id="review"
                name="review"
                placeholder="Write your review..."
                value={formData.review}
                onChange={handleChange}
                rows="5"
              />
            </div>

            <button
              type="submit"
              className="submit-review-btn"
              disabled={loading}
            >
              {loading
                ? "Submitting..."
                : "Submit Review"}
            </button>

            {message && (
              <p className="review-message">
                {message}
              </p>
            )}
          </form>
        </div>

        {/* =========================
            ADMIN AREA
        ========================= */}

        <div className="admin-section">

          {!user ? (
            <>
              <h2>Admin</h2>

              <form
                className="admin-login-form"
                onSubmit={handleAdminLogin}
              >
                <div className="review-input-group">
                  <label htmlFor="adminEmail">
                    Admin Email
                  </label>

                  <input
                    id="adminEmail"
                    type="email"
                    name="email"
                    placeholder="Admin email"
                    value={adminData.email}
                    onChange={handleAdminChange}
                  />
                </div>

                <div className="review-input-group">
                  <label htmlFor="adminPassword">
                    Password
                  </label>

                  <input
                    id="adminPassword"
                    type="password"
                    name="password"
                    placeholder="Admin password"
                    value={adminData.password}
                    onChange={handleAdminChange}
                  />
                </div>

                <button
                  type="submit"
                  className="admin-login-btn"
                  disabled={adminLoading}
                >
                  {adminLoading
                    ? "Logging in..."
                    : "Admin Login"}
                </button>

                {adminMessage && (
                  <p className="admin-message">
                    {adminMessage}
                  </p>
                )}
              </form>
            </>
          ) : (
            <div className="admin-logged-in">
              <p>
                Logged in as{" "}
                <strong>{user.email}</strong>
              </p>

              <button
                type="button"
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}

        </div>

        {/* =========================
            REVIEWS
        ========================= */}

        <div className="reviews-section">

          <div className="reviews-section-header">
            <h2>What People Say</h2>
          </div>

          {loadingReviews ? (
            <p className="reviews-status">
              Loading reviews...
            </p>
          ) : reviews.length === 0 ? (
            <p className="reviews-status">
              No reviews yet. Be the first to leave one.
            </p>
          ) : (
            <div className="reviews-list">

              {reviews.map((review) => (
                <article
                  className="review-card"
                  key={review.id}
                >

                  <div className="review-person">

                    <h3>
                      {review.name}
                    </h3>

                    <a
                      href={`mailto:${review.email}`}
                    >
                      {review.email}
                    </a>

                  </div>

                  <p className="review-text">
                    "{review.review}"
                  </p>

                  <small>
                    {new Date(
                      review.created_at
                    ).toLocaleDateString()}
                  </small>

                  {/* DELETE BUTTON */}
                  {user && (
                    <button
                      type="button"
                      className="delete-review-btn"
                      onClick={() =>
                        handleDeleteReview(review.id)
                      }
                    >
                      Delete Review
                    </button>
                  )}

                </article>
              ))}

            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default Reviews;