/**
 * Root Controller
 */

/**
 * Root Response
 * 
 * @route GET /
 * @access Public
 */
export const rootController = (req, res) => {
  res.status(200).json({
    message: "Welcome to LinKodkod Server!",
  });
};
