/*!
 * jQuery photoGrid v1.0.0
 * Justified Grid like Flickr or Google+ and Google Imagesearch
 * by Marco Krage
 * MIT License (see http://marco.mit-license.org)
 */
(function ( $ ) {
 
  $.fn.photoGrid = function( options ) {
 
    var settings = $.extend({
      itemSelector: ".item",
      resize: true,
      rowHeight: $(window).height() / 2,
      callback: function() {}
    }, options );
    
    // Private Functions
    _layout = function($container, itemSelector, callback) {  
      // Based on http://www.crispymtn.com/stories/the-algorithm-for-a-perfectly-balanced-photo-gallery
      var ideal_height, index, partition, row_buffer, rows, summed_width, containerWidth, weights;

      var photos = $container.find(itemSelector).toArray();
      
      containerWidth = $container.width();

      ideal_height = parseInt(settings.rowHeight);

      summed_width = photos.reduce((function(sum, p) {
        return sum += aspect_ratio(p) * ideal_height;
      }), 0);

      rows = Math.round(summed_width / containerWidth);

      if (rows < 1) {
        width = parseInt(ideal_height * aspect_ratio(photos));
        height = ideal_height;
        $(photos).css({        
          width: width - parseInt($(photos).css('marginLeft')) * 2,
          height: height - parseInt($(photos).css('marginTop')) * 2
        });      
      } else {
        weights = photos.map(function(p) {
          return parseInt(aspect_ratio(p) * 100);
        });
        partition = linear_partition(weights, rows);
        index = 0;
        row_buffer = [];
        $.each(partition, function(i, row) {
          var summed_ratios;
          row_buffer = [];
          $.each(row, function() {
            return row_buffer.push(photos[index++]);
          });
          summed_ratios = row_buffer.reduce((function(sum, p) {
            return sum += aspect_ratio(p);
          }), 0);
          return $.each(row_buffer,function(index, photo) {
            width = parseInt(containerWidth / summed_ratios * aspect_ratio(photo));
            height = parseInt(containerWidth / summed_ratios);
            $(photo).css({        
              width: width - parseInt($(photo).css('marginLeft')) * 2,
              height: height - parseInt($(photo).css('marginTop')) * 2
            });
          });
        });
      } 
      
      callback && callback();
    }

    aspect_ratio = function(p) {
      // aspect ratio incl. margins
      return $(p).outerWidth(true) / $(p).outerHeight(true);
    }

    // Source https://github.com/crispymtn/linear-partition
    // Modified by Marco Krage to remove underscore.js dependency
    linear_partition = function(seq, k) {
      // underscore.js dependencys
      var nativeIsArray = Array.isArray;
      var nativeForEach = Array.prototype.forEach;
      var _ = {};
      
      var each = _.each = _.forEach = function(obj, iterator, context) {
        if (obj == null) return obj;
        if (nativeForEach && obj.forEach === nativeForEach) {
          obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
          for (var i = 0, length = obj.length; i < length; i++) {
            if (iterator.call(context, obj[i], i, obj) === breaker) return;
          }
        } else {
          var keys = _.keys(obj);
          for (var i = 0, length = keys.length; i < length; i++) {
            if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
          }
        }
        return obj;
      };      
      _.isArray = nativeIsArray || function(obj) {
        return toString.call(obj) == '[object Array]';
      };
      _.max = function(obj, iterator, context) {
        var result = -Infinity, lastComputed = -Infinity,
            value, computed;
        if (!iterator && _.isArray(obj)) {
          for (var i = 0, length = obj.length; i < length; i++) {
            value = obj[i];
            if (value > result) {
              result = value;
            }
          }
        } else {
          each(obj, function(value, index, list) {
            computed = iterator ? iterator.call(context, value, index, list) : value;
            if (computed > lastComputed) {
              result = value;
              lastComputed = computed;
            }
          });
        }
        return result;
      };  
      _.min = function(obj, iterator, context) {
        var result = Infinity, lastComputed = Infinity,
            value, computed;
        if (!iterator && _.isArray(obj)) {
          for (var i = 0, length = obj.length; i < length; i++) {
            value = obj[i];
            if (value < result) {
              result = value;
            }
          }
        } else {
          each(obj, function(value, index, list) {
            computed = iterator ? iterator.call(context, value, index, list) : value;
            if (computed < lastComputed) {
              result = value;
              lastComputed = computed;
            }
          });
        }
        return result;
      };
      // END: underscore.js dependencys
    
      var ans, i, j, m, n, solution, table, x, y, _i, _j, _k, _l;
      n = seq.length;
      if (k <= 0) {
        return [];
      }
      if (k > n) {
        return seq.map(function(x) {
          return [x];
        });
      }
      table = (function() {
        var _i, _results;
        _results = [];
        for (y = _i = 0; 0 <= n ? _i < n : _i > n; y = 0 <= n ? ++_i : --_i) {
          _results.push((function() {
            var _j, _results1;
            _results1 = [];
            for (x = _j = 0; 0 <= k ? _j < k : _j > k; x = 0 <= k ? ++_j : --_j) {
              _results1.push(0);
            }
            return _results1;
          })());
        }
        return _results;
      })();
      solution = (function() {
        var _i, _ref, _results;
        _results = [];
        for (y = _i = 0, _ref = n - 1; 0 <= _ref ? _i < _ref : _i > _ref; y = 0 <= _ref ? ++_i : --_i) {
          _results.push((function() {
            var _j, _ref1, _results1;
            _results1 = [];
            for (x = _j = 0, _ref1 = k - 1; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; x = 0 <= _ref1 ? ++_j : --_j) {
              _results1.push(0);
            }
            return _results1;
          })());
        }
        return _results;
      })();
      for (i = _i = 0; 0 <= n ? _i < n : _i > n; i = 0 <= n ? ++_i : --_i) {
        table[i][0] = seq[i] + (i ? table[i - 1][0] : 0);
      }
      for (j = _j = 0; 0 <= k ? _j < k : _j > k; j = 0 <= k ? ++_j : --_j) {
        table[0][j] = seq[0];
      }
      for (i = _k = 1; 1 <= n ? _k < n : _k > n; i = 1 <= n ? ++_k : --_k) {
        for (j = _l = 1; 1 <= k ? _l < k : _l > k; j = 1 <= k ? ++_l : --_l) {
          m = _.min((function() {
            var _m, _results;
            _results = [];
            for (x = _m = 0; 0 <= i ? _m < i : _m > i; x = 0 <= i ? ++_m : --_m) {
              _results.push([_.max([table[x][j - 1], table[i][0] - table[x][0]]), x]);
            }
            return _results;
          })(), function(o) {
            return o[0];
          });
          table[i][j] = m[0];
          solution[i - 1][j - 1] = m[1];
        }
      }
      n = n - 1;
      k = k - 2;
      ans = [];
      while (k >= 0) {
        ans = [
          (function() {
            var _m, _ref, _ref1, _results;
            _results = [];
            for (i = _m = _ref = solution[n - 1][k] + 1, _ref1 = n + 1; _ref <= _ref1 ? _m < _ref1 : _m > _ref1; i = _ref <= _ref1 ? ++_m : --_m) {
              _results.push(seq[i]);
            }
            return _results;
          })()
        ].concat(ans);
        n = solution[n - 1][k];
        k = k - 1;
      }
      return [
        (function() {
          var _m, _ref, _results;
          _results = [];
          for (i = _m = 0, _ref = n + 1; 0 <= _ref ? _m < _ref : _m > _ref; i = 0 <= _ref ? ++_m : --_m) {
            _results.push(seq[i]);
          }
          return _results;
        })()
      ].concat(ans);
    }

    return this.each(function() {
      $container = $(this);

      // Start grid layout
      _layout($container, settings.itemSelector, settings.callback);
      
      // Window resize event
      if(settings.resize) {
        var resizeTimer;
        function resizeFunction() {
          _layout($container, settings.itemSelector);
        };
        $(window).resize(function() {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(resizeFunction, 250);
        });  
      }
    });
 
  };
 
}( jQuery ));
